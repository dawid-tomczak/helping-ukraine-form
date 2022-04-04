import React, { ReactElement, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Category } from '../../../@types/helpers/Category';
import { Product } from '../../../@types/helpers/Product';
interface Props {
  categories: Category[];
  products: Product[];
}

const formVariant = 'standard';

const Form = ({ categories, products }: Props): ReactElement => {
  const { t, i18n } = useTranslation();

  const [nameInput, setNameInput] = useState<string>('');
  const [categoryInput, setCategoryInput] = useState<string>('');
  const [productInput, setProductInput] = useState<string>('');
  const [amountInput, setAmountInput] = useState<string>('');

  const availableProducts: Product[] =
    categoryInput !== ''
      ? products.filter((product) => product.categoryId === categoryInput)
      : [];

  const resetForm = (fullReset = false) => {
    setCategoryInput('');
    setProductInput('');
    setAmountInput('');

    if (fullReset) {
      setNameInput('');
    }
  };

  const handleSubmit = (): void => {
    const elementToAdd = {
      name: nameInput,
      category: categoryInput,
      product: productInput,
      amount: amountInput,
      inputLang: i18n.language,
    };

    console.log('elementToAdd :>> ', elementToAdd);

    resetForm();
  };

  return (
    <FormGroup>
      <Stack spacing={3}>
        <FormControl variant={formVariant} required>
          <InputLabel htmlFor='name-input'>{t('Imię')}</InputLabel>
          <Input
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            id='name-input'
            aria-describedby='name-input'
            required
          />
        </FormControl>

        <FormControl variant={formVariant} required>
          <FormLabel>{t('Kategoria')}</FormLabel>
          <RadioGroup
            value={categoryInput}
            onChange={(event) => setCategoryInput(event.target.value)}
          >
            {categories.map((category) => {
              return (
                <FormControlLabel
                  key={category.id}
                  value={category.id}
                  control={<Radio />}
                  label={category.name[i18n.language as 'PL' | 'UK']}
                />
              );
            })}
          </RadioGroup>
        </FormControl>

        <FormControl variant={formVariant} required>
          <InputLabel htmlFor='product-input-label'>{t('Produkt')}</InputLabel>
          <Select
            labelId='product-input-label'
            id='product-input'
            value={productInput}
            label={t('Produkt')}
            onChange={(event) => setProductInput(event.target.value)}
          >
            {availableProducts.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name[i18n.language as 'PL' | 'UK']}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant={formVariant} required>
          <InputLabel htmlFor='amount-input'>{t('Ilość')}</InputLabel>
          <Input
            value={amountInput}
            type='number'
            onChange={(event) => setAmountInput(event.target.value)}
            id='amount-input'
            aria-describedby='amount-input'
          />
        </FormControl>
        <Grid container justifyContent='flex-end' columns={10}>
          <Grid
            item
            xs={5}
            md={1}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button
              variant='text'
              color='error'
              onClick={() => resetForm(true)}
            >
              {t('Wyczyść')}
            </Button>
          </Grid>

          <Grid
            item
            xs={5}
            md={1}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button variant='contained' onClick={handleSubmit} type='submit'>
              {t('Prześlij')}
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </FormGroup>
  );
};

export default Form;
