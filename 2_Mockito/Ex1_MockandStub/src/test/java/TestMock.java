package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class TestMock {

    @Test
    public void testExtApi() {

        ExtApi mockApi = mock(ExtApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        Service service = new Service(mockApi);

        String result = service.fetchData();
        System.out.println("Fetched: " + result);
        assertEquals("Mock Data", result);
    }
}
