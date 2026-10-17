'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCampersFilters } from '@/src/lib/api';

import { FiMap } from 'react-icons/fi';

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
    <form onSubmit={handleSubmit}>
      <label>
        <FiMap />
        <span>Location</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <h2>Filters</h2>

      <fieldset>
        <legend>Camper form</legend>
        {data?.forms.map((item) => (
          <label key={item}>
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

      <fieldset>
        <legend>Engine</legend>
        {data?.engines.map((item) => (
          <label key={item}>
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

      <fieldset>
        <legend>Transmission</legend>
        {data?.transmissions.map((item) => (
          <label key={item}>
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

      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>
        Clear filters
      </button>
    </form>
  );
};

export default CamperFilters;
