public class FinancialMain {
    public static void main(String[] args) {
        System.out.println("Financial Forecasting");
        System.out.println("---------------------");

        double initialInvestment = 10000;
        double annualGrowthRate = 5;
        int forecastYears = 10;

        System.out.println("Initial Investment: $" + initialInvestment);
        System.out.println("Annual Growth Rate: " + annualGrowthRate + "%");
        System.out.println("Forecast Duration: " + forecastYears + " years\n");

        double futureValueRecursive = FinancialForecast.calculateFutureValue(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("Future Value (Recursive): $%.2f%n", futureValueRecursive);

        double futureValueIterative = FinancialForecast.calculateFutureValueIterative(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("Future Value (Iterative): $%.2f%n", futureValueIterative);

        System.out.println("------------");
        System.out.println("Testing Done");
    }
}