import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import renderer from 'react-test-renderer';

let component;
beforeEach(() => {
    render(<LoginPage />);
    component = renderer.create(<LoginPage />);
    window.localStorage.setItem('aruiz', 'aruiz');
});


test('Componente renderizado', () => {
    expect(<LoginPage />).toBeTruthy();
});

test('login Correcto', () => {
    component.setUser('aruiz');
    component.setPass('aruiz');
    component.submit();
    expect(component.history.push).toBeCalledWith('/store');
});