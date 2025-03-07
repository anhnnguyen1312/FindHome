<?php
class Test extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('TestPostgres');  // Tải model
    }

    public function index()
    {
        $result = $this->TestPostgres->get_all_users();  // Gọi phương thức kiểm tra kết nối

        if ($result) {
            echo "Kết nối cơ sở dữ liệu thành công!";
        } else {
            echo "Không thể kết nối đến cơ sở dữ liệu.";
        }
    }
}
