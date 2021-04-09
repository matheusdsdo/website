<?php
    include ("Conexao.php");

    class Usuario extends Conexao{
        public function mostraUsuarios(){
            //CARREGA TODOS OS USUÁRIOS
            $BFetch = $this -> Conectar() -> prepare("select * from usuario");
            $BFetch ->execute();

            //DECLARANDO VARIÁVEIS PARA O WHILE
            $j = [];
            $i = 0;

            while ($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
                $j[$i]=[
                    "codigo" => $Fetch['codigo'],
                    "usuario" => $Fetch['usuario'],
                    "senha" => $Fetch['senha'],
                    "email" => $Fetch['email']
                ];
                $i++;
            }
            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($j);
        }
    }
?>