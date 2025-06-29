package com.example;

import org.junit.Test;
import static org.mockito.Mockito.*;

public class TestMock {

    @Test
    public void testVerifyInteraction() {
        ExtApi mockApi = mock(ExtApi.class);

        Service service = new Service(mockApi);
        service.fetchData();

        verify(mockApi).getData();

        System.out.println("getData() was called as expected.");
    }
}
