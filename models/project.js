const db = require('../util/database');

module.exports = class Project {
    constructor(
        id, user_id, title, description, goal_amount, current_amount = 0.00, status = 'pending',
        category_id, created_at, updated_at) {
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.goal_amount = goal_amount;
        this.current_amount = current_amount;
        this.status = status;
        this.category_id = category_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    save() {

    }
    static findById(id) {
        // Find project by ID from database
        return db.execute('SELECT * FROM projects WHERE id = ?', [id]);
    }
    static fetchAll() {
        // Fetch all projects from database
        return db.execute('SELECT * FROM projects');
    }
    static fetchFeatured() {
        // Fetch featured projects from database
        return db.execute('SELECT * FROM projects WHERE status = ?', ['featured']);
    }
    static findByTitle(title, sortBy) {

        // Query to join project with category to get all data in addition to category name
        // Join projects with categories to get category name
        let sql = 'SELECT projects.*, categories.name AS category_name FROM projects LEFT JOIN categories ON projects.category_id = categories.id';
        let params = [];

        if (title !== undefined) {
            sql += ' WHERE projects.title LIKE ?';
            params.push(`%${title}%`);
        }

        if (sortBy !== undefined) {
            if (sortBy === 'recent') {
                sql += ' ORDER BY projects.created_at DESC';
            }
            else if (sortBy === 'oldest') {
                sql += ' ORDER BY projects.created_at ASC';
            }
            else if (sortBy === 'amount') {
                sql += ' ORDER BY projects.goal_amount DESC';
            }
            else if (sortBy === 'progress') {
                sql += ' ORDER BY (projects.current_amount / projects.goal_amount) DESC';
            }
        }

        return db.execute(sql, params);
    }
}
