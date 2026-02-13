package app.util;

import com.google.gson.Gson;
import java.util.LinkedHashMap;
import java.util.Map;

public class Formatter {
    public String formatAsJson(String name, int score) {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("name", name);
        data.put("score", score);
        return new Gson().toJson(data);
    }
}
