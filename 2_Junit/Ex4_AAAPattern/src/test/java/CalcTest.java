package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalcTest {

    private Calc calculator;

    @Before
    public void setUp() {
        calculator = new Calc();
    }
    @After
    public void tearDown() {
    }
    @Test
    public void testAddition() {
        int result = calculator.add(10, 5);
        System.out.println("Addition result: " + result);
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 5);
        System.out.println("Subtraction result: " + result);
        assertEquals(5, result);
    }
    @Test
    public void testMultiplication() {
        int result = calculator.multiply(10, 5);
        System.out.println("Multiplication result: " + result);
        assertEquals(50, result);
    }

    @Test
    public void testDivision() {
        int result = calculator.divide(10, 5);
        System.out.println("Division result: " + result);
        assertEquals(2, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivisionByZero() {
        calculator.divide(10, 0);
    }
}
