package com.example;

public class Service {
    private ExtApi api;

    public Service(ExtApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
