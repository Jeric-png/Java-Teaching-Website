public class SavingsAccount extends BankAccount {
    private double minBalance;

    public SavingsAccount(String accountHolder, double balance, double minBalance) {
        // TODO: Call super constructor and initialise minBalance
    }

    @Override
    public boolean withdraw(double amount) {
        // TODO: Only allow withdrawal if remaining balance >= minBalance
        // Return true if successful, false otherwise
        return false;
    }

    public void addInterest(double rate) {
        // TODO: Increase balance by (balance * rate)
    }
}
