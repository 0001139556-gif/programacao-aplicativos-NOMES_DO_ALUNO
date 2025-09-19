Package atividade03AmandaJava;

import java.util.Scanner;

public class Atividade03.Amanda_Java {

    public static void main(String[] args) {
         Scanner entrada = new Scanner(System.in);
         
         //Q 1)
         double acucar = 200;
         int porcoes = 8;
         
         System.out.print("Digite o numero de porcoes desejadas:");
         int pedidos = entrada.nextInt();
 
         double acucarNecessario = (acucar * pedidos) / porcoes;
         System.out.println("Para" + pedidos + "porcoes, voce precisara de " + acucarNecessario + "gramcas de acucar.");
         
         //Q 2)
         
         int impressoras = 3, minutos = 12;
         
         System.out.print("Digite o numero de impressoreas");
         int numImpressoras = entrada.nextInt();
        
         double tempoNecess = (impressoras * minutos) / (double) numImpressoras;
         System.out.println("Para "+ numImpressoras +" impressoras, o tempo necessario e:"+ minutos+"minutos.");
         
         //Q 3)
         
         double distancia, consumo;
         
         System.out.print("Digite a distancia em km:");
         distancia = entrada.nextDouble();
         
        consumo = (18.0 / 240.0) * distancia;
        System.out.printf("Combustivel necessario: %.2f L.%n", consumo );
        
        //Q 4)
        System.out.print("Digite o numero de maquinas");
        
        int m, h;
        
        m = entrada.nextInt();
        System.out.print("Digite o valor hora:");
        h = entrada.nextInt();
        
        double calc, prod;
        prod = 900 / (6 * 5);
        calc = m * h * prod;   
        System.out.print("Resultado com base no numero de maquinas e horas inseridos:"+ calc);
        
        //Q5)
        
        double c, u, r; 
        
        
        c = entrada.nextDouble();
        System.out.print("Digite a cotacao do dolar:");
        u = entrada.nextDouble();
        System.out.print("Digite a quantia em dolares:");
        r = c * u;
        System.out.printf("voce precisa de %.2f reais .%n", r);
        
        //Q6)
        
        double a, b, x;
        System.out.print("Digite o valor de a:");
        a = entrada.nextDouble();
        System.out.print("Digite o valor de b");
        b = entrada.nextDouble();
        x = -b / a;
        System.out.println("solucao da equacao: x =" + x);
        
        //Q7)
        
        double m, x0, y0;
        System.out.print("Digite o valor de m:");
        m = entrada.nextDouble();
        System.out.print("Digite o valor de b:");
        b = entrada.nextDouble();
        System.out.print("Digite o valor de x0:");
        x0 = entrada.nextDouble();
        y0 = m * x0 + b ;
        System.out.printf("Resultado: y = %.4f%n", y0);
              
   }
    //Q8)
    import java.util.Scanner;
public class Questao8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite x1: ");
        double x1 = sc.nextDouble();
        System.out.print("Digite y1: ");
        double y1 = sc.nextDouble();
        System.out.print("Digite x2: ");
        double x2 = sc.nextDouble();
        System.out.print("Digite y2: ");
        double y2 = sc.nextDouble();

        double m = (y2 - y1) / (x2 - x1);
        double b = y1 - m * x1;

        System.out.println("Equação da reta: y = " + m + "x + " + b);
    }
}
//9)
    import java.util.Scanner;
public class Questao9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite m1: ");
        double m1 = sc.nextDouble();
        System.out.print("Digite b1: ");
        double b1 = sc.nextDouble();
        System.out.print("Digite m2: ");
        double m2 = sc.nextDouble();
        System.out.print("Digite b2: ");
        double b2 = sc.nextDouble();

        if (m1 == m2) {
            System.out.println("As retas são paralelas e não têm interseção.");
        } else {
            double x = (b2 - b1) / (m1 - m2);
            double y = m1 * x + b1;

            System.out.println("Ponto de interseção: (" + x + ", " + y + ")");
        }
    }
}
//10)
import java.util.Scanner;
public class Questao10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a: ");
        double a = sc.nextDouble();
        System.out.print("Digite b: ");
        double b = sc.nextDouble();
        System.out.print("Digite c: ");
        double c = sc.nextDouble();

        double delta = b * b - 4 * a * c;

        if (delta < 0) {
            System.out.println("Não existem raízes reais.");
        } else {
            double x1 = (-b + Math.sqrt(delta)) / (2 * a);
            double x2 = (-b - Math.sqrt(delta)) / (2 * a);

            System.out.println("Delta = " + delta);
            System.out.println("x1 = " + x1);
            System.out.println("x2 = " + x2);
        }
    }
}
//11)
import java.util.Scanner;
public class Questao11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a: ");
        double a = sc.nextDouble();
        System.out.print("Digite b: ");
        double b = sc.nextDouble();
        System.out.print("Digite c: ");
        double c = sc.nextDouble();

        double delta = b * b - 4 * a * c;

        if (delta < 0) {
            System.out.println("Não existem raízes reais.");
        } else {
            double distancia = Math.abs(Math.sqrt(delta) / a);
            System.out.println("Distância entre as raízes: " + distancia);
        }
    }
}
//12)
import java.util.Scanner;
public class Questao12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a: ");
        double a = sc.nextDouble();
        System.out.print("Digite b: ");
        double b = sc.nextDouble();
        System.out.print("Digite c: ");
        double c = sc.nextDouble();
        System.out.print("Digite x0: ");
        double x0 = sc.nextDouble();

        // Função f(x0)
        double fx = a * Math.pow(x0, 2) + b * x0 + c;
        // Derivada f'(x0)
        double fpx = 2 * a * x0 + b;

        System.out.println("f(x0) = " + fx);
        System.out.println("f'(x0) = " + fpx);
    }
}
//13)
import java.util.Scanner;
public class Questao13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite m: ");
        double m = sc.nextDouble();
        System.out.print("Digite b: ");
        double b = sc.nextDouble();
        System.out.print("Digite x1: ");
        double x1 = sc.nextDouble();
        System.out.print("Digite x2: ");
        double x2 = sc.nextDouble();

        double y1 = m * x1 + b;
        double y2 = m * x2 + b;

        double area = ((y1 + y2) / 2) * (x2 - x1);

        System.out.println("Área sob a reta = " + area);
    }
}
}