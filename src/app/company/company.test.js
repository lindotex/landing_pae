import Company from './page';
import { render, screen } from '@testing-library/react';

test('should render the page company', ()=>{
    render(<Company/>);
    const innerHtmlText = screen.getByText('Company page');
    expected(innerHtmlText).toBeInTheDocument();
})