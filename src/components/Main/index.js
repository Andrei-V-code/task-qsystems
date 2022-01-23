import React from 'react';
import { Wrap, Button, Center, H1, H1btn, Section, Margin, ButtonBottom, H1btnBottom } from '../../style/home';
import Modal from './modal';

const Main = () => {
  return (
    <div className="container">
      <div>
        <Modal />
        <img src={require('../../images/main.png')} alt="main" />
      </div>

      <div>
        <div className="head">
          <Center>
            <h1>
              Сделай подготовку к ОГЭ более эффективной!
            </h1>
            <H1>Читай! Решай! Проверяй!</H1>
            <Wrap>
              <Button>
                <H1btn>
                  Начать
                  <br /> подготовку
                </H1btn>
              </Button>
            </Wrap>
          </Center>
        </div>
        <Section>
          <Margin>
            <h1>
              Никаких волнений — тебе нужно просто регулярно
              <br /> готовиться по плану и наблюдать за своим прогрессом!
            </h1>
          </Margin>
          <Margin>
            <h1>
              Теория и задачи по каждой теме удобно собраны в одном
              <br /> месте
            </h1>
          </Margin>
          <Margin>
            <h1>Никакой «воды» в теории — только самое важное.</h1>
          </Margin>
          <Margin>
            <h1>У всех задач есть подробное решение.</h1>
          </Margin>
          <Margin>
            <h1>
              Только нужные и актуальные материалы для подготовки к<br /> ОГЭ 2020 и ничего лишнего
            </h1>
          </Margin>
        </Section>
        <Wrap>
          <ButtonBottom>
            <H1btnBottom>Начать подготовку</H1btnBottom>
          </ButtonBottom>
        </Wrap>
      </div>
    </div>
  );
};

export default Main;
