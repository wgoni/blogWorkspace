// package com.geoni4.api.config.db;

// import java.sql.Connection;
// import java.sql.Statement;

// import javax.sql.DataSource;

// import org.springframework.boot.ApplicationArguments;
// import org.springframework.boot.ApplicationRunner;
// import org.springframework.jdbc.core.JdbcTemplate;
// import org.springframework.stereotype.Component;

// import lombok.RequiredArgsConstructor;

// @Component
// @RequiredArgsConstructor
// public class PostgreSQLRunner implements ApplicationRunner{

//   DataSource dataSource;
//   JdbcTemplate jdbcTemplate;

//   @Override
//   public void run(ApplicationArguments args) throws Exception {
//     try (Connection connection = dataSource.getConnection()){
//       System.out.println(dataSource.getClass());
//       System.out.println(connection.getMetaData().getURL());
//       System.out.println(connection.getMetaData().getUserName());

//       Statement statement = connection.createStatement();
//       String sql = "SELECT * FROM users";
//       statement.executeUpdate(sql);
//     } catch (Exception e) {
//       e.getStackTrace();
//     }
//   }
    
// }