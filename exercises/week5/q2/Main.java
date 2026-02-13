package app;

import app.util.Formatter;

public class Main {
    public static void main(String[] args) {
        Formatter fmt = new Formatter();
        System.out.println(fmt.formatAsJson("Alice", 85));
        System.out.println(fmt.formatAsJson("Bob", 92));
    }
}
