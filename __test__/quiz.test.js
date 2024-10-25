import {
  quizzes,
  quiz,
  addScore,
  score,
  users,
  addScoreToUser,
  tempUser,
  addUser,
} from "../js/quiz";

describe("[Quiz list]", () => {
  it("[Quiz list] should be defined", () => {
    expect(quizzes).toBeDefined();
  });

  it("[Quiz list] should be a list", () => {
    expect(Array.isArray(quizzes)).toBeTruthy();
  });

  it("[Quiz list] should contain at least one quiz", () => {
    expect(quizzes.length).toBeGreaterThan(0);
  });

  it("[Quiz list] object inside the list contains property { question, answer, options }", () => {
    const { question, answer, options } = quizzes[0]; //gets first quizz
    const hasProperties = (question && answer && options) === undefined;

    expect(hasProperties).toBeFalsy();
  });
});

describe("[User]", () => {
  it("[tempUser], should be defined", () => {
    expect(tempUser).toBeDefined();
  });

  it("[tempUser], properties should exists ", () => {
    const { name, total } = tempUser;
    let hasProperties = name || undefined;

    hasProperties = (total == 0)

    expect(hasProperties).toBeTruthy();
  });
});

describe("[addUser]", () => {
  it("[addUser] should be defined", () => {
    expect(addUser).toBeDefined();
  });

  it("[addUser] should throw if called with invalid input", () => {
    expect(() => {
      addUser();
    }).toThrow();
  });

  it("[addUser] should add a user given a { name }", () => {
    const name = "Linda";
    addUser(name);
    expect(tempUser.name).toBe(name);
  });
});

describe("[addScore]", () => {
  it("[addScore] should be defined", () => {
    expect(addScore).toBeDefined();
  });

  it("[addScore] to be a function", () => {
    expect(typeof addScore).toBe("function");
  });

  it("[addScore] should throw if parms { answer, option } are invalid!", () => {
    expect(() => {
      addScore();
    }).toThrow(/^Invalid answer or option!$/);
  });

  it("[addScore] When called, should increament when answer is correct!", () => {
    const answer = "no",
      opiton = "no";
    addScore(answer, opiton);
    expect(score).toBe(1);
  });

  it("[addScore] When called, should throw if the answer is not correct! ", () => {
    expect(() => {
      const answer = "yes",
        opiton = "no";
      addScore(answer, opiton);
    }).toThrow();
  });
});

describe("[users]", () => {
  test("[users] should be defined", () => {
    expect(users).toBeDefined();
  });

  it("[users] should be a list", () => {
    expect(Array.isArray(users)).toBeTruthy();
  });

  it("[users] should empty", () => {
    expect(users.length).toBe(0);
  });

});

describe("[addScoreToUser]", () => {
  it("[addScoreToUser] should be defined", () => {
    expect(addScoreToUser).toBeDefined();
  });

  it("[addScoreToUser] should throw if user invalid", () => {
    expect(() => {
      addUser("");
      addScoreToUser();
    }).toThrow();
  });

  it("[addScoreToUser] should add user to a list at the end", () => {
    addUser(tempUser.name);
    addScoreToUser();
    console.log(users)
    expect(users[0]).toEqual(tempUser);
  });
});
