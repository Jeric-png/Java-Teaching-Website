public class SavingsAccount extends BankAccount {
    private double minBalance;

    public SavingsAccount(String accountHolder, double balance, double minBalance) {
        super(accountHolder, balance);
        this.minBalance = minBalance;
    }

    @Override
    public boolean withdraw(double amount) {
        if (getBalance() - amount >= minBalance) {
            setBalance(getBalance() - amount);
            return true;
        }
        return false;
    }

    public void addInterest(double rate) {
        setBalance(getBalance() + getBalance() * rate);
    }
}
