'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCampersFilters } from '@/src/lib/api';
import { FiMap, FiX } from 'react-icons/fi';

import css from './CamperFilters.module.css';

export interface Filters {
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
}

type Props = {
  onSearch: (filters: Filters) => void;
};

const CamperFilters = ({ onSearch }: Props) => {
  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');
  const [engine, setEngine] = useState('');
  const [transmission, setTransmission] = useState('');

  const { data } = useQuery({
    queryKey: ['camper-filters'],
    queryFn: getCampersFilters,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({
      location: location.trim() || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    onSearch({});
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.location}>
        <span className={css.label}>Location</span>
        <div className={css.inputWrap}>
          <FiMap className={css.inputIcon} />
          <input
            className={css.input}
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City"
          />
        </div>
      </label>

      <h2 className={css.title}>Filters</h2>

      <fieldset className={css.group}>
        <legend className={css.legend}>Camper form</legend>
        {data?.forms.map((item) => (
          <label key={item} className={css.radio}>
            <input
              type="radio"
              name="form"
              value={item}
              checked={form === item}
              onChange={() => setForm(item)}
            />
            {item.replace('_', ' ')}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.legend}>Engine</legend>
        {data?.engines.map((item) => (
          <label key={item} className={css.radio}>
            <input
              type="radio"
              name="engine"
              value={item}
              checked={engine === item}
              onChange={() => setEngine(item)}
            />
            {item}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.group}>
        <legend className={css.legend}>Transmission</legend>
        {data?.transmissions.map((item) => (
          <label key={item} className={css.radio}>
            <input
              type="radio"
              name="transmission"
              value={item}
              checked={transmission === item}
              onChange={() => setTransmission(item)}
            />
            {item}
          </label>
        ))}
      </fieldset>

      <button className={css.search} type="submit">
        Search
      </button>
      <button className={css.clear} type="button" onClick={handleClear}>
        <FiX size={24} />
        Clear filters
      </button>
    </form>
  );
};

export default CamperFilters;
