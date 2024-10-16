function handleLogin() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("환영합니다, " + email + "님!");
        return true; // 폼 제출
    } else {
        alert("이메일과 비밀번호를 모두 입력하세요.");
        return false; // 폼 제출 중단
    }
}