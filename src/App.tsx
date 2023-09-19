import './App.css';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <nav>
            <Menu>
                <MenuItem>
                    <a href="http://localhost:3000/">Item 1</a>
                </MenuItem>
                <MenuItem>
                    <a href="http://localhost:3000/">Item 2</a>
                </MenuItem>
                <MenuItem>
                    <a href="http://localhost:3000/">Item 3</a>
                </MenuItem>
            </Menu>
        </nav>
    );
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation/>
                <LoginBtn>LOGIN</LoginBtn>
            </Header>
            <Block>
                <Title>Accessibility</Title>
                <Form>
                    <div>
                        <Label htmlFor="1">
                            Label for field 1
                        </Label>
                        <Field id="1" placeholder="Field 1"/>
                    </div>

                    <div>
                        <Label htmlFor="2">
                            Label for field 2
                        </Label>
                        <Field id="2" placeholder="Field 2"/>
                    </div>

                    <div>
                        <Label htmlFor="3">
                            Label for field 3
                        </Label>
                        <Field id="3" placeholder="Field 3"/>
                    </div>
                </Form>
            </Block>
        </div>
    );
}

export default App

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 60px 0;
`;

const Header = styled.header`
  height: 80px;
  background-color: #e91e63;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

const MenuItem = styled.li`
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`;

const LoginBtn = styled.button`
  color: #fff;
  background-color: #e91e63;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 5px;
`;

const Block = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Label = styled.label`
  font-size: 1rem;
  line-height: 2rem;
`;

const Field = styled.input`
  padding: 5px 15px;
  width: 100%;
  font-size: 1rem;
`;




