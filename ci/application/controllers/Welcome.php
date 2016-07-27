<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	//função para pegar os dados do db;
	public function get_data(){		

		$query = $this->db->query("select * from angular");

		foreach ($query->result() as $row)
		{
		    $arr[] = array('id' => $row->id, 'nome' => $row->nome , 'email' =>  $row->email, 'telefone' => $row->telefone);
		}					
			
		//$result = array(array('nome'=>'João', 'email'=>'email@email.com'), array('nome'=>'Maria', 'email'=>'maria@email.com'));
		echo json_encode($arr);	
	}

	//Função para salvar os dados;
	public function saveData(){
		//pega os dados do $http do Angular
		$meuPost = file_get_contents("php://input");

		//para acessar os dados: $json.nome ou $Json.email e etc.
		$json = json_decode( $meuPost );

		$data = array(
        	'nome' => $json->nome,
        	'email' => $json->email,
        	'telefone' => $json->telefone
        
		);

		$this->db->insert('angular', $data);
		// Aqui vc pode implementar o codigo para enviar o email via php.

		//retorna os dados para o success do Angular
		echo json_encode(array(

								"nome"=>$json->nome,
								"email"=>$json->email,
								"telefone"=>$json->telefone,								

							));
	}


	//Função para pegar dados atrávez de um id;
	public function view_data(){
				
		$id = $this->uri->segment(3);
		$limit = 1;
		
		 $query = $this->db->get_where('angular', array('id' => $id), $limit);
		//$query = $this->db->get('angular');

		 if($query == null){
		 	$arr[] = '';
		 }

		foreach ($query->result() as $row)
		{
		    $arr = array('id' => $row->id, 'nome' => $row->nome , 'email' =>  $row->email, 'telefone' => $row->telefone);
		}					
			
		//$result = array(array('nome'=>'João', 'email'=>'email@email.com'), array('nome'=>'Maria', 'email'=>'maria@email.com'));
		echo json_encode($arr);		
	}

	public function delete_data(){
		$id = $this->uri->segment(3);
		
		$this->db->where('id', $id);
		$this->db->delete('angular');
		
	}

	public function update_data(){
		
		$id = $this->uri->segment(3);
		
		$data = array(
        	'title' => $title,
        	'name' => $name,
        	'date' => $date
		);

		$this->db->where('id', $id);
		$this->db->update('angular', $data);
	}

}
