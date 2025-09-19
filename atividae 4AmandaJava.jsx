/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/reactjs.jsx to edit this template
 */
var Hello = React.createClass({
    render: function () {
        return (
                <div></div>
                );
    }
});
Atividade4 
import java.util.Scanner;

public class AtividadeEstruturasDeControle {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- 1) Verificação de Número (Positivo/Negativo) ---");
        System.out.print("Digite um número: ");
        double numero1 = scanner.nextDouble();

        if (numero1 < 0) {
            System.out.println("Você digitou um número negativo.");
        } else {
            System.out.println("Você digitou um número positivo.");
        }
        System.out.println("\n");

        //Questão 2
        System.out.println(" 2) Verificação de Número (Positivo/Negativo/Zero) ");
        System.out.print("Digite um número: ");
        double numero2 = scanner.nextDouble();

        if (numero2 > 0) {
            System.out.println("Você digitou um número positivo.");
        } else if (numero2 < 0) {
            System.out.println("Você digitou um número negativo.");
        } else {
            System.out.println("Você digitou zero.");
        }
        System.out.println("/n");

        // Questão 3
        System.out.println("3) Cálculo de Média e Aprovação");
        System.out.print("Digite a primeira nota: ");
        double nota1 = scanner.nextDouble();
        System.out.print("Digite a segunda nota: ");
        double nota2 = scanner.nextDouble();
        System.out.print("Digite a terceira nota: ");
        double nota3 = scanner.nextDouble();

        double media = (nota1 + nota2 + nota3) / 3;

        System.out.printf("A média do aluno é: %.2f\n", media);

        if (media >= 7) {
            System.out.println("ALUNO APROVADO");
        } else {
            System.out.println("ALUNO REPROVADO");
        }
        System.out.println("\n");

        scanner.close();
    }
}
// 4)
        System.out.println("4) Média com Recuperação");
        System.out.print("Digite a primeira nota: ");
        double nota4_1 = scanner.nextDouble();
        System.out.print("Digite a segunda nota: ");
        double nota4_2 = scanner.nextDouble();
        System.out.print("Digite a terceira nota: ");
        double nota4_3 = scanner.nextDouble();

        double media4 = (nota4_1 + nota4_2 + nota4_3) / 3;

        System.out.printf("A média do aluno é: %.2f\n", media4);

        if (media4 >= 7) {
            System.out.println("ALUNO APROVADO");
        } else if (media4 >= 5) {
            System.out.println("ALUNO EM RECUPERAÇÃO");
        } else {
            System.out.println("ALUNO REPROVADO");
        }
        System.out.println("\n");

        // 5)
        System.out.println("--- 5) Verificação de Par ou Ímpar ---");
        System.out.print("Digite um número inteiro: ");
        int numero5 = scanner.nextInt();

        if (numero5 % 2 == 0) {
            System.out.println("O número " + numero5 + " é PAR.");
        } else {
            System.out.println("O número " + numero5 + " é ÍMPAR.");
        }
        System.out.println("\n");

        // 6)
        System.out.println("6) O Maior entre Três Números");
        System.out.print("Digite o primeiro número: ");
        double num1_6 = scanner.nextDouble();
        System.out.print("Digite o segundo número: ");
        double num2_6 = scanner.nextDouble();
        System.out.print("Digite o terceiro número: ");
        double num3_6 = scanner.nextDouble();

        if (num1_6 >= num2_6 && num1_6 >= num3_6) {
            System.out.println("O maior número é: " + num1_6);
        } else if (num2_6 >= num1_6 && num2_6 >= num3_6) {
            System.out.println("O maior número é: " + num2_6);
        } else {
            System.out.println("O maior número é: " + num3_6);
        }
        System.out.println("\n");
//7
import java.util.Scanner;

public class ClassificacaoNadadorSwitchCase {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Classificação de Nadador (usando if/else e switch)");
        System.out.print("Digite a idade do nadador: ");
        int idade = scanner.nextInt();

        String categoria;

        if (idade >= 18) {
            categoria = "Adulto";
        } else if (idade >= 14) {
            categoria = "Juvenil";
        } else if (idade >= 9) {
            categoria = "Infantil";
        } else {
            categoria = "Mirim";
        }

        switch (categoria) {
            case "Adulto":
                System.out.println("Categoria: Adulto");
                break;
            case "Juvenil":
                System.out.println("Categoria: Juvenil");
                break;
            case "Infantil":
                System.out.println("Categoria: Infantil");
                break;
            case "Mirim":
                System.out.println("Categoria: Mirim");
                break;
        }

        scanner.close();
    }
    //8)
    //import java.util.Scanner;

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

        double m, b;

        if (x1 == x2) {
            System.out.println("A reta é vertical (x = " + x1 + "), não possui forma y = mx + b.");
        } else {
            m = (y2 - y1) / (x2 - x1);
            b = y1 - m * x1;
            System.out.println("Equação da reta: y = " + m + "x + " + b);
        }

        sc.close();
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

        double x, y;

        if (m1 == m2) {
            if (b1 == b2) {
                System.out.println("As retas são coincidentes (infinitos pontos de interseção).");
            } else {
                System.out.println("As retas são paralelas (não há ponto de interseção).");
            }
        } else {
            x = (b2 - b1) / (m1 - m2);
            y = m1 * x + b1;
            System.out.println("Ponto de interseção: (" + x + ", " + y + ")");
        }

        sc.close();
    }
}
//10
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

        System.out.println("\nEscolha uma opção:");
        System.out.println("1 - Calcular apenas Δ");
        System.out.println("2 - Calcular apenas x1");
        System.out.println("3 - Calcular apenas x2");
        System.out.println("4 - Calcular Δ, x1 e x2");
        int opcao = sc.nextInt();

        switch (opcao) {
            case 1:
                System.out.println("Δ = " + delta);
                break;
            case 2:
                if (delta < 0) {
                    System.out.println("Não existem raízes reais.");
                } else {
                    double x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    System.out.println("x1 = " + x1);
                }
                break;
            case 3:
                if (delta < 0) {
                    System.out.println("Não existem raízes reais.");
                } else {
                    double x2 = (-b - Math.sqrt(delta)) / (2 * a);
                    System.out.println("x2 = " + x2);
                }
                break;
            case 4:
                if (delta < 0) {
                    System.out.println("Δ = " + delta);
                    System.out.println("Não existem raízes reais.");
                } else {
                    double x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    double x2 = (-b - Math.sqrt(delta)) / (2 * a);
                    System.out.println("Δ = " + delta);
                    System.out.println("x1 = " + x1);
                    System.out.println("x2 = " + x2);
                }
                break;
            default:
                System.out.println("Opção inválida.");
        }

        sc.close();
    }
}
     //11
 import java.util.Scanner;
public class Questao11IfElse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor de a: ");
        double a = sc.nextDouble();
        System.out.print("Digite o valor de b: ");
        double b = sc.nextDouble();
        System.out.print("Digite o valor de c: ");
        double c = sc.nextDouble();

        double delta = b * b - 4 * a * c;

        if (delta < 0) {
            System.out.println("Não existem raízes reais, logo não há distância.");
        } else {
            double d = Math.abs(Math.sqrt(delta) / a);
            System.out.println("Distância entre as raízes = " + d);
        }

        sc.close();
    }
}
     //12)
     import java.util.Scanner;
public class Questao12Switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite 1 para calcular a derivada da quadrática: ");
        int opcao = sc.nextInt();

        switch (opcao) {
            case 1:
                System.out.print("Digite o valor de a: ");
                double a = sc.nextDouble();
                System.out.print("Digite o valor de b: ");
                double b = sc.nextDouble();
                System.out.print("Digite o valor de c: ");
                double c = sc.nextDouble();
                System.out.print("Digite o valor de x0: ");
                double x0 = sc.nextDouble();

                double fx0 = a * Math.pow(x0, 2) + b * x0 + c;
                double fderivada = 2 * a * x0 + b;

                System.out.println("f(x0) = " + fx0);
                System.out.println("f’(x0) = " + fderivada);
                break;

            default:
                System.out.println("Opção inválida!");
        }

        sc.close();
    }
}
//13)
import java.util.Scanner;
public class Questao13IfElse {
    public static void main(String[] args) {
       
        }Scanner input = new Scanner (System.in);
         int cod_prod;
         double soma;
         System.out.print("Digite o código do produto:");
         cod_prod=input.nextInt();
         Soma=0.0
         Switch(cod_prod){
             case 100:
                 System.out.print("Detergente - R$1,59");
                 soma=soma + 1,59;
             case 101:
                 System.out.print("Esponja - R$4,59");
                 soma = soma + 1,79;
                 break;
             default:
                 System.out.print("Código inválido");
                
         }