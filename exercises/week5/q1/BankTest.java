public class BankTest {
    public static void main(String[] args) {
        // Test SavingsAccount
        SavingsAccount sa = new SavingsAccount("Alice", 500.0, 100.0);
        System.out.println("=== Savings Account ===");
        System.out.println("Holder: " + sa.getAccountHolder());
        System.out.println("Balance: $" + sa.getBalance());

        sa.deposit(200.0);
        System.out.println("After deposit $200: $" + sa.getBalance());

        System.out.println("Withdraw $550: " + sa.withdraw(550.0));
        System.out.println("Balance: $" + sa.getBalance());

        System.out.println("Withdraw $600: " + sa.withdraw(600.0));
        System.out.println("Balance: $" + sa.getBalance());

        sa.addInterest(0.05);
        System.out.println("After 5% interest: $" + sa.getBalance());

        System.out.println();

        // Test CheckingAccount
        CheckingAccount ca = new CheckingAccount("Bob", 300.0, 200.0);
        System.out.println("=== Checking Account ===");
        System.out.println("Holder: " + ca.getAccountHolder());
        System.out.println("Balance: $" + ca.getBalance());

        System.out.println("Withdraw $400: " + ca.withdraw(400.0));
        System.out.println("Balance: $" + ca.getBalance());

        System.out.println("Withdraw $150: " + ca.withdraw(150.0));
        System.out.println("Balance: $" + ca.getBalance());
    }
}
