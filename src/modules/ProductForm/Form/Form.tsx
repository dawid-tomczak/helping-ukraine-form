import React, { ReactElement, useState } from 'react';
import styles from './Form.module.css';
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Category } from '../../../@types/helpers/Category';
import { Product } from '../../../@types/helpers/Product';

interface Props {
  categories: Category[];
  products: Product[];
}

const Form = ({ categories, products }: Props): ReactElement => {
  const { t, i18n } = useTranslation();

  const [nameInput, setNameInput] = useState<string | null>(null);
  const [categoryInput, setCategoryInput] = useState<string | null>(null);
  const [productInput, setProductInput] = useState<string | null>(null);
  const [amountInput, setAmountInput] = useState<string | null>(null);

  const resetForm = (fullReset = false) => {
    setCategoryInput(null);
    setProductInput(null);
    setAmountInput(null);

    if (fullReset) {
      setNameInput(null);
    }
  };

  return (
    <>
      <form className={styles.form}>
        <Stack spacing={3} alignItems={'center'}>
          <TextField
            className={styles.form__input}
            label={t('Imię')}
            variant='outlined'
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          />

          <FormControl>
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
                    label={category.name['PL']}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>

          <Autocomplete
            className={styles.form__input}
            options={products}
            getOptionLabel={(option) => option.name.PL}
            renderInput={(params) => (
              <TextField {...params} label={t('Produkt')} />
            )}
            value={products.find((e) => e.id === productInput)}
            onChange={(event, input) => setProductInput((input as Product).id)}
          />

          <TextField
            className={styles.form__input}
            label={t('Ilość')}
            variant='outlined'
            type='number'
            value={amountInput}
            onChange={(event) => setAmountInput(event.target.value)}
          />

          <Button
            className={styles.form__button}
            variant='contained'
            onClick={() => resetForm()}
          >
            {t('Prześlij')}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Form;
