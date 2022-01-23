import styled from 'styled-components';

export const ItemsWrap = styled.div`
  display: grid;
  grid-gap: 5em;
  grid-template-columns: repeat(3, 3fr);
  padding: 5em;
  justify-items: center;
`;

export const Wrap = styled.div`
  width: 340px;
`;

export const Body = styled.div`
  background-color: #eaeaea;
  height: 330px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #343a40;
  height: 173px;
`;

export const UL = styled.ul`
  text-align: center;
`;

export const UlBody = styled.ul`
  text-align: center;
  padding-top: 30px;
`;

export const LI = styled.li`
  font-size: 25px;
  font-weight: 700;
  color: #fffff3;
`;

export const LiBody = styled.li`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  padding: 10px 0;
`;

export const GorizontalWrap = styled.div`
  display: grid;
  justify-content: center;
`;

export const Section = styled.div`
  width: 1550px;
  margin-bottom: 150px;
`;

export const BodyG = styled.div`
  background-color: #eaeaea;
  height: 200px;
`;