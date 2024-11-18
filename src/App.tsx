import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import home from './assets/home.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = useCallback(() => {
    setLoading(true);

    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '5rem' }} tag="h1" view="medium" font="system" weight="semibold">
          Мечтаете закрыть ипотеку побыстрее?
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Добавьте к выплатам 10&nbsp;000&nbsp;₽ в месяц — и освободитесь от ипотеки на 10 лет раньше
        </Typography.Text>
        <img src={home} width="100%" height={314} alt="home" style={{ objectFit: 'contain', objectPosition: 'right' }} />
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Мне интересно
        </ButtonMobile>
      </div>
    </>
  );
};
