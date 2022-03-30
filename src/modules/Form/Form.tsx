import React, { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();

  const [product, setProduct] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const options = [t('Chleb'), t('Bułki'), t('Mleko'), t('Płatki')];

  const resetForm = () => {
    setProduct('');
    setAmount('');
  };

  return (
    <>
      <h1>{t('Czego brakuje?')}</h1>
      <form>
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={t('Produkt')} />
          )}
          value={product}
          onChange={(event, value) => setProduct(value as string)}
        />
        <TextField
          label={t('Ilość')}
          variant='outlined'
          type='number'
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <Button variant='contained' onClick={resetForm}>
          {t('Prześlij')}
        </Button>
      </form>
    </>
  );
};

export default Form;
