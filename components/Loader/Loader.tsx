import css from './Loader.module.css';

type Props = {
  title?: string;
  text?: string;
};

const Loader = ({
  title = 'Loading tracks...',
  text = 'Please wait while we fetch the best travel trucks for you',
}: Props) => {
  return (
    <div className={css.backdrop} role="status">
      <div className={css.box}>
        <div className={css.spinner} />
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
