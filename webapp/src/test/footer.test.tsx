import { render } from '@testing-library/react';
import Footer from '../components/footer/Footer';



test('footer is rendered', () => {
    const component = render(<Footer></Footer>)
    
    expect(component.container).toHaveTextContent("DeDe. All Rights Reserved.")
    expect(component.container).toHaveTextContent("Sobre nosotros")
    expect(component.container).toHaveTextContent("Copyright")
  });