export class Project {
  id: number | undefined;
  name = "";
  discription = "";
  imageUrl = "";
  contractTypeId: number | undefined;
  contractSignedOn: Date = new Date();
  budget = 0;
  isActive = false;
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    // 객체의 기본 상태를 설정해주는 생성자 메서드 : construcor()는 new에 의해 자동으로 호출되므로 특별한 절체 없이 객체를 초기화 함
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.discription) this.discription = initializer.discription;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.contractTypeId) this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSignedOn) this.contractSignedOn = initializer.contractSignedOn;
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
    console.log("initializer : ", initializer)
  }
}