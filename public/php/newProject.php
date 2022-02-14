<?php
session_start();
include 'variables.php';

if (isset($_SESSION['id']) && $_SESSION['id'] == $authorized_github_id) {
    # read all the data from the form
    $project_title = $_POST['title'];
    $project_label = $_POST['label'];
    $project_description = $_POST['description'];
    $project_imageURL = $_POST['imageURL'];
    $project_madeWith = $_POST['madeWith'];
    $project_github = $_POST['github'];
    $project_demo = $_POST['demo'];
    $project_more = $_POST['more'];

# return the names of the empty fields
    $emptyFields = array();
    if (empty($project_title)) {
        $emptyFields[] = "title";
    }
    if (empty($project_description)) {
        $emptyFields[] = "description";
    }
    if (empty($project_madeWith)) {
        $emptyFields[] = "madeWith";
    }

# if empty fields are found, return the names of the empty fields
    if (count($emptyFields) > 0) {
        echo json_encode($emptyFields);
        header("Location: /");
        exit();
    }

    # print the contents of the data/project.json file to the screen
    $data = file_get_contents("../data/projects.json");
    $projects = json_decode($data, true);

    # print the first project in the array
    $newProject = array(
        "title" => $project_title,
        "label" => $project_label,
        "description" => $project_description,
        "image" => $project_imageURL,
        "madeWith" => $project_madeWith,
        "links" => array(
            "github" => $project_github,
            "demo" => $project_demo,
            "more" => $project_more
        )
    );

    # add the new project to the top of the array
    array_unshift($projects, $newProject);

    $projects = json_encode($projects, JSON_PRETTY_PRINT);
    file_put_contents("../data/projects.json", $projects);

   header("Location: /#projects&success");

} else {
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', '', time() - 3600, '/');
    session_destroy();
    echo "You are not logged in";
    exit();
}










