import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const listSyst= [
  {system: `Сервис проверки такси`,
  discr: `Цифровой сервис, разработанный в рамках государственной программы Приморского края «Информационное общество» на 2020–2027 годы в целях автоматизации процесса выдачи разрешений на такси.`,
  link: ``},
  {system: `Сeрвис Тест "Covid-19"`,
  discr: `Сервис предназначен для верификации сведений, указанных в результатах исследований медицинских организаций, посредством сформированных программой QR-кодов.`,
  link: ``},
  {system: `Сервис реестр аттракционов`,
  discr: `Разработанный сервис обеспечивает прием, накопление и хранение сведений об аттракционах, расположенных на территории Приморского края, и видеозаписей контрольных запусков к ним.`,
  link: ``},
  {system: `Сервис конвертер формы ПФР`,
  discr: `Сервис для конвертации формы сбора информации о заработной плате работников государственных и муниципальных учреждений в соответствии с XSD схемами Пенсионного фонда.`,
  link: ``},
  {system: `Сервис реестр НПА`,
  discr: `Разработанный сервис предназначен для ведения реестра нормативных правовых актов Правительства Приморского края.`,
  link: ``},
  {system: `Сервис мониторинг водных объектов`,
  discr: `Разработанный сервис предназначен для мониторинга водных объектов (рек, ручьев), проводимого с целью контроля исполнения условий водопользования, повышения качественного состояния водных объектов.`,
  link: ``},
  {system: `Сервис реестр пропусков`,
  discr: `Разработанный сервис предназначен для оптимизации процесса проезда грузового транспорта к автомобильным пунктам пропуска через государственную границу.`,
  link: ``},
  {system: `АИС МИЗО`,
  discr: `Целью создания информационной системы АИС МИЗО является повышение эффективности деятельности министерства имущественных и земельных отношений Приморского края.`,
  link: ``},
  {system: `Сервис обращений граждан`,
  discr: `Разработанный сервис предназначен для автоматизации работы органов исполнительной власти с обращениями граждан.`,
  link: ``},
  {system: `Сервис телефонный справочник`,
  discr: `Разработанный сервис предназначен для предоставления контактных данных подразделений Правительства Приморского края, Аппарата Губернатора и Правительства Приморского края, Органов Исполнительной власти и их сотрудников.`,
  link: ``},
  {system: `АИС Прогноз`,
  discr: `Информационная система предназначена для обеспечения проведения мониторинга и анализа показателей эффективности деятельности органов местного самоуправления.`,
  link: ``}
  ]

function SystItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const [sign, setSign] = React.useState("+")
  const press = () => {
    setOpenClose(!isOpen);
    if (!isOpen)
      setSign("×");
    else setSign("+");
  }
  return(
    <li>
      <span className="left">{props.system}</span>
      <span className="right" onClick={press}>{sign}</span>
      {isOpen &&
        <div>
          <p> {props.discr}</p>
          <a href={props.link} className='link'>Подробнее</a>
        </div>
      }
    </li>
  )
  }

function Systems (props) {
  const listSyst = props.list.map((item, index) =>
  <SystItem key={index} system={item.system} discr={item.discr} link={item.link}/>
  );
  return (
    <div className="system">
      <div className='title'>
      <h2 className=''>{props.title} </h2>
      <h5 className='discription'>{props.discription}</h5>
      </div>
      <ul>
        {listSyst}
      </ul>
    </div>
  )
}

function ButtonModal(props) {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <input className="button" type="button" value={props.val} onClick={() => setActive(true)}/>
      <div className={active ? "modal active" : "modal"}>
        <div className='modal_content' onClick={e => e.stopPropagation()}>
          <h4 className='title'>Обращение в техническую поддержку</h4>
          <form>
            <input type="text" value="Ваше имя" className='input'></input>
            <input type="text" value="Ваш Email" className='input'></input>
            <input type="text" value="Тема обращения" className='input'></input>
            <input type="text" value="Текст обращения" className='input text'></input>
          </form>
          <button className='form_button'>Отправить</button>
          <button className='form_button' onClick={() => setActive(false)}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}

function Content() {

  return(
    <>
    {/* <Head listImg={listImg} />
    <Tagline />*/}
    <Systems title="Информационные системы" discription="В данном разделе указана краткая информация обо всех информационных системах"list={listSyst} />
    <ButtonModal val="Тех. поддержка"/>
    </>
  )
}
root.render(<Content />)