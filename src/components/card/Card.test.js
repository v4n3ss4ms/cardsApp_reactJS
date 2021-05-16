import MOCKS from '../../__mocks__/common';
import { render, screen } from '@testing-library/react';
import Card from './Card';

it('card component rendering', () =>{
  const { container } = render(<Card card={MOCKS.SINGLE_CARD}/>);
  const editBtn = screen.getByText(/Edit/i);
  const removeBtn = screen.getByText(/Remove/i);
  const img = container.getElementsByTagName('img')[0];
  
  expect(editBtn).toBeInTheDocument();
  expect(removeBtn).toBeInTheDocument();
  expect(img).toBeInTheDocument();  
});