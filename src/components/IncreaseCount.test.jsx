import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import IncreaseCount from "./IncreaseCount";
import App from "../App";


describe('Tests for Increase Count Button', ()=>{
    test('that it renders with the right text',()=>{
        render(<IncreaseCount />);
        const el = screen.getByText('Increase');
        expect(el).toBeDefined();
    });

    test('that intially count is 0',()=>{
        render(<App />);
        const elCount = screen.getByRole('paragraph');
        expect(elCount).toBeDefined();
        expect(elCount.textContent).toBe('0');


    });

    test('that on first click count is 1',()=>{
        render(<App />);
        
        const elCount = screen.getByRole('paragraph');
        expect(elCount).toBeDefined();
        
        const elBtn = screen.getByRole('button');
        expect(elBtn).toBeDefined();

        fireEvent.click(elBtn);
        expect(elCount.textContent).toBe('1');

    });


});   // test group / test suite