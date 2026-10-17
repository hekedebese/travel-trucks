import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop} role="status">
      <div className={css.box}>
        <div className={css.spinner} />
        <h2 className={css.title}>Loading tracks...</h2>
        <p className={css.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
};

export default Loader;
