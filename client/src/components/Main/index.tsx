import * as S from './styles';
import Footer from '../Footer';
import StyledLink from '../StyledLink';

const navigation = [
  {
    label: 'Note',
    href: '/note',
  },
  {
    label: 'To-Do',
    href: '/to-do',
  },
  {
    label: 'Calendar',
    href: '/calendar',
  },
  {
    label: 'Mood Logger',
    href: '/mood-logger',
  },
  {
    label: 'Pomodoro Timer',
    href: '/pomodoro',
  },
];

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {/* This is just a placeholder for the navigation right now */}
    <S.Navigation>
      <S.Title>Peak Productivity</S.Title>
      {navigation.map(({ href, label }) => (
        <StyledLink key={label} href={href} label={label} />
      ))}
    </S.Navigation>
    <Footer />
  </S.Wrapper>
);

export default Main;
