<?php
class TestPostgres extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();  // Tải cơ sở dữ liệu
    }

    public function test_connection()
    {
        // Thực hiện một truy vấn SQL đơn giản để kiểm tra kết nối
        try {
            $query = $this->db->query('SELECT * FROM "adminNotifications"');
            return true;  // Nếu truy vấn thành công, trả về true
        } catch (Exception $e) {
            return false;  // Nếu có lỗi, trả về false
        }
    }
    public function get_all_users() {
        // Sử dụng Query Builder để truy vấn
        $this->db->select('*');
        $this->db->from('users');
        $query = $this->db->get(); // Thực thi truy vấn

        // Kiểm tra nếu có dữ liệu và trả về kết quả
        if ($query->num_rows() > 0) {
            return $query->result();  // Trả về tất cả các bản ghi
        } else {
            return array();  // Trả về mảng rỗng nếu không có dữ liệu
        }
    }
}
