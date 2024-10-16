function handleSignUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return false; // 폼 제출 중단
    }

    // 성공적인 회원가입 메시지
    alert("회원 가입을 축하드립니다!\nE-mail: " + email);
    return true; // 폼 제출 허용
}