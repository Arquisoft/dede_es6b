import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Login from '../components/Login';
import { LoginPage } from '../pages/LoginPage';



test('footer is rendered', () => {
    const component = render(<Footer></Footer>)
    
    expect(component.container).toHaveTextContent("DeDe. All Rights Reserved.")
    expect(component.container).toHaveTextContent("Sobre nosotros")
    expect(component.container).toHaveTextContent("Copyright")
  });