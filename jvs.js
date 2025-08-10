document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('transferForm');
    if (!form) return;
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // ล้าง error
        document.querySelectorAll('.error-text').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });

        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        // ตรวจแต่ละช่อง
        if (!document.getElementById('transferDate').value) {
            showError('transferDateError', 'กรุณาเลือกวันที่');
            isValid = false;
        }

        if (!document.getElementById('newFaculty').value) {
            showError('newFacultyError', 'กรุณาเลือกคณะที่ต้องการโอนย้าย');
            isValid = false;
        }

        const studentName = document.getElementById('studentName').value;
        if (!studentName.trim() || !/^[a-zA-Zก-๙\s]+$/.test(studentName)) {
            showError('studentNameError', 'กรุณากรอกชื่อ-นามสกุลด้วยตัวอักษรเท่านั้น');
            isValid = false;
        }

        if (!/^\d{10}$/.test(document.getElementById('studentId').value)) {
            showError('studentIdError', 'กรุณากรอกรหัสนักศึกษาเป็นตัวเลข 10 หลัก');
            isValid = false;
        }

        if (!/^\d{10}$/.test(document.getElementById('phoneNumber').value)) {
            showError('phoneNumberError', 'กรุณากรอกเบอร์โทรศัพท์เป็นตัวเลข 10 หลัก');
            isValid = false;
        }

        if (!document.getElementById('system').value.trim()) {
            showError('systemError', 'กรุณากรอกระบบ');
            isValid = false;
        }

        if (!document.getElementById('major').value.trim()) {
            showError('majorError', 'กรุณากรอกสาขาวิชา');
            isValid = false;
        }

        if (!document.getElementById('originalFaculty').value) {
            showError('originalFacultyError', 'กรุณาเลือกคณะที่สังกัด');
            isValid = false;
        }

        if (!document.getElementById('transferMajor').value.trim()) {
            showError('transferMajorError', 'กรุณากรอกสาขาวิชาที่ต้องการโอนย้าย');
            isValid = false;
        }

        if (!document.getElementById('transferReason').value.trim()) {
            showError('transferReasonError', 'กรุณากรอกเหตุผล');
            isValid = false;
        }

        if (!document.getElementById('transferFacultySubmit').value.trim()) {
            showError('transferFacultySubmitError', 'กรุณากรอกคณะที่ยื่นคำร้อง');
            isValid = false;
        }

        if (!document.getElementById('signatureName').value.trim()) {
            showError('signatureNameError', 'กรุณาลงชื่อ-นามสกุล');
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'changemajor2.html';
        }
    });
});
