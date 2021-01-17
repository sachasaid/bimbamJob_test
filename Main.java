import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            String line = null;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }
    }

}