package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class Assertion{

    @Test
    public void testAssertions() {
        System.out.println("assertEquals: " + (2 + 3 == 5));
        assertEquals(5, 2 + 3);

        System.out.println("assertTrue: " + (5 > 3));
        assertTrue(5 > 3);

        System.out.println("assertFalse: " + (5 < 3));
        assertFalse(5 < 3);

        Object obj1 = null;
        System.out.println("assertNull: " + (obj1 == null));
        assertNull(obj1);

        Object obj2 = new Object();
        System.out.println("assertNotNull: " + (obj2 != null));
        assertNotNull(obj2);

        System.out.println("All assertions passed successfully!");
    }
}
