import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const ProfileForm = ({ onSubmit }) => {
  const { handleSubmit, control, setValue, watch } = useForm();
  const [cities, setCities] = useState([]);

  const handleProfileInfo = (data) => {
    onSubmit(data);
  };

  const selectedCountry = watch('country', ''); 
  const selectedCity = watch('city', '');  

  useEffect(() => {
    const updateCities = () => {
      switch (selectedCountry) {
        case 'ua':
          setCities([
            { value: 'kyiv', label: 'Київ' },
            { value: 'lviv', label: 'Львів' },
            { value: 'dnipro', label: 'Дніпро' },
            { value: 'odesa', label: 'Одеса' },
          ]);
          break;
        case 'pl':
          setCities([
            { value: 'waw', label: 'Варшава' },
            { value: 'krk', label: 'Краків' },
            { value: 'gdansk', label: 'Гданськ' },
            { value: 'wroclaw', label: 'Вроцлав' },
          ]);
          break;
        case 'us':
          setCities([
            { value: 'nyc', label: 'Нью-Йорк' },
            { value: 'la', label: 'Лос-Анджелес' },
            { value: 'chi', label: 'Чикаго' },
            { value: 'sf', label: 'Сан-Франциско' },
          ]);
          break;
        case 'cz':
          setCities([
            { value: 'prg', label: 'Прага' },
            { value: 'brno', label: 'Брно' },
            { value: 'ostrava', label: 'Острава' },
            { value: 'plzen', label: 'Пльзень' },
          ]);
          break;
        case 'es':
          setCities([
            { value: 'mad', label: 'Мадрид' },
            { value: 'bcn', label: 'Барселона' },
            { value: 'val', label: 'Валенсія' },
            { value: 'sev', label: 'Севілья' },
          ]);
          break;
        case 'fr':
          setCities([
            { value: 'par', label: 'Париж' },
            { value: 'mrs', label: 'Марсель' },
            { value: 'lil', label: 'Лілль' },
            { value: 'nyc', label: 'Ніцца' },
          ]);
          break;
        default:
          setCities([]);
      }
    };

    updateCities();
  }, [selectedCountry, setValue]);

  return (
    <form onSubmit={handleSubmit(handleProfileInfo)}>
      <label>
        Full Name:
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </label>

      <label>
        Age:
        <Controller
          name="age"
          control={control}
          render={({ field }) => <input type="number" {...field} />}
        />
      </label>

      <label>
        Country:
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              onChange={(selectedOption) => {
                setValue('country', selectedOption?.value || '');
                setValue('city', null);
              }}
              options={[
                { value: 'ua', label: 'Україна' },
                { value: 'pl', label: 'Польща' },
                { value: 'us', label: 'США' },
                { value: 'cz', label: 'Чехія' },
                { value: 'es', label: 'Іспанія' },
                { value: 'fr', label: 'Франція' },
              ]}
            />
          )}
        />
      </label>

      <label>
        City:
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={cities.map((city) => ({
                value: city.value,
                label: city.label,
              }))}
              isDisabled={!selectedCountry}
            />
          )}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
