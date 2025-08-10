document.addEventListener('DOMContentLoaded', () => {
    const formPage2 = document.getElementById('transferFormPage2');
    const submitButton = document.getElementById('submitRequestButton');
    const successModal = document.getElementById('successModal');
    const modalCloseButton = document.getElementById('modalCloseButton');

    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Clear all previous error messages and hide them
            document.querySelectorAll('.error-text').forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });

            const isValid = validateFormPage2();

            if (isValid) {
                // If the form is valid, show the success modal
                successModal.style.display = 'flex';
                // Reset the form after successful submission
                formPage2.reset();
            } else {
                const firstError = document.querySelector('.error-text:not(:empty)');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', () => {
            successModal.style.display = 'none';
        });
    }

    // Close modal when clicking on the overlay
    window.addEventListener('click', (event) => {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    function validateFormPage2() {
        let isValid = true;

        // Validation for (3) ความเห็นประธานกรรมการบริหารหลักสูตร
        const programDirectorOpinion = document.getElementById('programDirectorOpinion');
        const programDirectorOpinionError = document.getElementById('programDirectorOpinionError');
        if (programDirectorOpinion.value.trim() === '') {
            programDirectorOpinionError.textContent = 'กรุณากรอกความเห็น';
            programDirectorOpinionError.style.display = 'block';
            isValid = false;
        }

        const programDirectorNamePage2 = document.getElementById('programDirectorNamePage2');
        const programDirectorNameErrorPage2 = document.getElementById('programDirectorNameErrorPage2');
        if (programDirectorNamePage2.value.trim() === '') {
            programDirectorNameErrorPage2.textContent = 'กรุณากรอกชื่อ-นามสกุล';
            programDirectorNameErrorPage2.style.display = 'block';
            isValid = false;
        }

        const programDirectorDatePage2 = document.getElementById('programDirectorDatePage2');
        const programDirectorDateErrorPage2 = document.getElementById('programDirectorDateErrorPage2');
        if (programDirectorDatePage2.value === '') {
            programDirectorDateErrorPage2.textContent = 'กรุณาเลือกวันที่';
            programDirectorDateErrorPage2.style.display = 'block';
            isValid = false;
        }

        // Validation for (6) ความเห็นคณบดีคณะ
        const deanDecision = document.querySelector('input[name="dean_decision"]:checked');
        const deanDecisionError = document.getElementById('deanDecisionError');
        if (!deanDecision) {
            deanDecisionError.textContent = 'กรุณาเลือกความเห็นคณบดีคณะ';
            deanDecisionError.style.display = 'block';
            isValid = false;
        }

        const deanOpinion = document.getElementById('deanOpinion');
        const deanOpinionError = document.getElementById('deanOpinionError');
        if (deanOpinion.value.trim() === '') {
            deanOpinionError.textContent = 'กรุณากรอกความเห็น';
            deanOpinionError.style.display = 'block';
            isValid = false;
        }

        const deanName = document.getElementById('deanName');
        const deanNameError = document.getElementById('deanNameError');
        if (deanName.value.trim() === '') {
            deanNameError.textContent = 'กรุณากรอกชื่อ-นามสกุล';
            deanNameError.style.display = 'block';
            isValid = false;
        }

        const deanDate = document.getElementById('deanDate');
        const deanDateError = document.getElementById('deanDateError');
        if (deanDate.value === '') {
            deanDateError.textContent = 'กรุณาเลือกวันที่';
            deanDateError.style.display = 'block';
            isValid = false;
        }

        // Validation for (4) ความเห็นคณบดีคณะ (เดิม)
        const deanOriginalDecision = document.querySelector('input[name="dean_decision_original"]:checked');
        const deanOriginalDecisionError = document.getElementById('deanOriginalDecisionError');
        if (!deanOriginalDecision) {
            deanOriginalDecisionError.textContent = 'กรุณาเลือกความเห็นคณบดีคณะ';
            deanOriginalDecisionError.style.display = 'block';
            isValid = false;
        }

        const deanOpinionOriginal = document.getElementById('deanOpinionOriginal');
        const deanOpinionOriginalError = document.getElementById('deanOpinionOriginalError');
        if (deanOpinionOriginal.value.trim() === '') {
            deanOpinionOriginalError.textContent = 'กรุณากรอกความเห็น';
            deanOpinionOriginalError.style.display = 'block';
            isValid = false;
        }

        const deanNameOriginal = document.getElementById('deanNameOriginal');
        const deanNameOriginalError = document.getElementById('deanNameOriginalError');
        if (deanNameOriginal.value.trim() === '') {
            deanNameOriginalError.textContent = 'กรุณากรอกชื่อ-นามสกุล';
            deanNameOriginalError.style.display = 'block';
            isValid = false;
        }

        const deanDateOriginal = document.getElementById('deanDateOriginal');
        const deanDateOriginalError = document.getElementById('deanDateOriginalError');
        if (deanDateOriginal.value === '') {
            deanDateOriginalError.textContent = 'กรุณาเลือกวันที่';
            deanDateOriginalError.style.display = 'block';
            isValid = false;
        }

        // Validation for (7) งานเงินรายได้ กองคลัง
        const receiptBook = document.getElementById('receiptBook');
        const receiptNumber = document.getElementById('receiptNumber');
        const receiptInfoError = document.getElementById('receiptInfoError');
        
        if (receiptBook.value.trim() === '' || receiptNumber.value.trim() === '') {
            receiptInfoError.textContent = 'กรุณากรอกข้อมูลเล่มที่และเลขที่ให้ครบถ้วน';
            receiptInfoError.style.display = 'block';
            isValid = false;
        } else {
            const receiptBookValue = receiptBook.value.trim();
            const receiptNumberValue = receiptNumber.value.trim();

            if (!/^\d{1,6}$/.test(receiptBookValue) || !/^\d{1,6}$/.test(receiptNumberValue)) {
                receiptInfoError.textContent = 'เล่มที่และเลขที่ต้องเป็นตัวเลขไม่เกิน 6 หลัก';
                receiptInfoError.style.display = 'block';
                isValid = false;
            }
        }

        const receiverName = document.getElementById('receiverName');
        const receiverNameError = document.getElementById('receiverNameError');
        if (receiverName.value.trim() === '') {
            receiverNameError.textContent = 'กรุณากรอกชื่อผู้รับเงิน';
            receiverNameError.style.display = 'block';
            isValid = false;
        }

        const receiverDate = document.getElementById('receiverDate');
        const receiverDateError = document.getElementById('receiverDateError');
        if (receiverDate.value === '') {
            receiverDateError.textContent = 'กรุณาเลือกวันที่';
            receiverDateError.style.display = 'block';
            isValid = false;
        }

        // Validation for (8) ความเห็นผู้อำนวยการสำนัก
        const directorOpinion = document.getElementById('directorOpinion');
        const directorOpinionError = document.getElementById('directorOpinionError');
        if (directorOpinion.value.trim() === '') {
            directorOpinionError.textContent = 'กรุณากรอกความเห็น';
            directorOpinionError.style.display = 'block';
            isValid = false;
        }

        const directorName = document.getElementById('directorName');
        const directorNameError = document.getElementById('directorNameError');
        if (directorName.value.trim() === '') {
            directorNameError.textContent = 'กรุณากรอกชื่อ-นามสกุล';
            directorNameError.style.display = 'block';
            isValid = false;
        }

        const directorDate = document.getElementById('directorDate');
        const directorDateError = document.getElementById('directorDateError');
        if (directorDate.value === '') {
            directorDateError.textContent = 'กรุณาเลือกวันที่';
            directorDateError.style.display = 'block';
            isValid = false;
        }

        // Validation for (9) ความเห็นหัวหน้ากลุ่มภารกิจ
        const headOpinion = document.getElementById('headOpinion');
        const headOpinionError = document.getElementById('headOpinionError');
        if (headOpinion.value.trim() === '') {
            headOpinionError.textContent = 'กรุณากรอกความเห็น';
            headOpinionError.style.display = 'block';
            isValid = false;
        }

        const headName = document.getElementById('headName');
        const headNameError = document.getElementById('headNameError');
        if (headName.value.trim() === '') {
            headNameError.textContent = 'กรุณากรอกชื่อ-นามสกุล';
            headNameError.style.display = 'block';
            isValid = false;
        }

        const headDate = document.getElementById('headDate');
        const headDateError = document.getElementById('headDateError');
        if (headDate.value === '') {
            headDateError.textContent = 'กรุณาเลือกวันที่';
            headDateError.style.display = 'block';
            isValid = false;
        }

        // Validation for (10) สำหรับเจ้าหน้าที่
        const newStudentId = document.getElementById('newStudentId');
        const newStudentIdError = document.getElementById('newStudentIdError');
        if (newStudentId.value.trim() === '') {
            newStudentIdError.textContent = 'กรุณากรอกรหัสนักศึกษาใหม่';
            newStudentIdError.style.display = 'block';
            isValid = false;
        } else if (!/^\d{10}$/.test(newStudentId.value.trim())) {
            newStudentIdError.textContent = 'รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก';
            newStudentIdError.style.display = 'block';
            isValid = false;
        }
        
        const officerName = document.getElementById('officerName');
        const officerNameError = document.getElementById('officerNameError');
        if (officerName.value.trim() === '') {
            officerNameError.textContent = 'กรุณากรอกชื่อ-นามสกุลเจ้าหน้าที่';
            officerNameError.style.display = 'block';
            isValid = false;
        }

        const officerDate = document.getElementById('officerDate');
        const officerDateError = document.getElementById('officerDateError');
        if (officerDate.value === '') {
            officerDateError.textContent = 'กรุณาเลือกวันที่';
            officerDateError.style.display = 'block';
            isValid = false;
        }

        return isValid;
    }
});