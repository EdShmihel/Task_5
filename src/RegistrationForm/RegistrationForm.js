import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const RegistrationForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  const handleRegistration = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <label>
        Phone Number:
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </label>

      <label>
        Email:
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </label>

      <label>
        Password:
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
      </label>

      <label>
        Confirmation Code:
        <Controller
          name="confirmationCode"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
