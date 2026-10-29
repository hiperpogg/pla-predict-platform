CREATE TABLE pla_experiments (
    id SERIAL PRIMARY KEY,
    initial_mass_g NUMERIC(5, 3),
    final_mass_g NUMERIC(5, 3),
    breaking_force_n NUMERIC(6, 2),
    time_in_alcohol_s INTEGER,
    material VARCHAR(50) DEFAULT 'PLA'
);

INSERT INTO pla_experiments (initial_mass_g, final_mass_g, breaking_force_n, time_in_alcohol_s)
VALUES
    (1.259, 1.259, 302.2, 0), (1.259, 1.259, 280.5, 0),
    (1.259, 1.259, 309.1, 0), (1.259, 1.259, 295.0, 0),
    (1.443, 1.514, 139.4, 10), (1.443, 1.520, 171.6, 10),
    (1.443, 1.485, 161.0, 10), (1.443, 1.457, 150.7, 10),
    (1.449, 1.527, 210.0, 5), (1.449, 1.532, 230.0, 5),
    (1.449, 1.529, 198.0, 5), (1.449, 1.524, 206.9, 5);