import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

describe('Tests for MyComponent', ()=>{
    test('that it renders with the right text',()=>{
        render(<MyComponent />);
        const el = screen.getByText(/hello/i);
        expect(el).toBeDefined();
    });
});   // test group / test suite