import React from 'react'; 
import { mount } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/dom';



describe('Pruebas en PrivateRoute', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('span').exists() ).toBe(true);
    });
    

})
