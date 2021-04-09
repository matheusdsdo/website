<?php
    abstract class Conexao {
        //METODO QUE REALIZA CONEXÃO COM O BANCO DE DADOS
        protected function Conectar(){
            try {
                return $con = new PDO ("mysql:host=localhost;dbname=bancosite" , "root" , "");
            } catch (PDOException $erro){
               return $erro -> getMessage();
            }
        }
    }
?>