public class CheckingAccount extends BankAccount {
    private double overdraftLimit;

    public CheckingAccount(String accountHolder, double balance, double overdraftLimit) {
        // TODO: Call super constructor and initialise overdraftLimit
    }

    @Override
    public boolean withdraw(double amount) {
        // TODO: Allow withdrawal into negative balance,
        // but balance cannot go below -overdraftLimit
        // Return true if successful, false otherwise
        return false;
    }
}
