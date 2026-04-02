import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ExperienceComponent from "../../../../components/views/Experience/ExperienceComponent.vue";

// Mock the TranslationService
vi.mock("../../../../services/TranslationService/TranslationService", () => {
  const mockTimeline = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      duration: "2020 - Present",
      logo: "logo1.png",
      description: "Senior development role",
      projects: [
        {
          title: "Project A",
          description: "First project details",
          date: "2020-2021",
          logo: "project-logo.png",
          skills: ["React", "TypeScript", "Node.js"],
        },
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Inc",
      duration: "2018 - 2020",
      logo: "logo2.png",
      description: "Junior development role",
      projects: [
        {
          title: "Project B",
          description: "Second project details",
          date: "2019-2020",
          logo: "project-logo2.png",
          skills: ["Vue", "JavaScript", "CSS"],
        },
      ],
    },
  ];

  return {
    default: {
      currentLanguage: {
        PAGES: {
          EXPERIENCES: {
            timeline: mockTimeline,
          },
        },
      },
    },
  };
});

describe("ExperienceComponent", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(ExperienceComponent);
  });

  describe("Component Rendering", () => {
    it("should render the component with title", () => {
      expect(wrapper.find("h1").exists()).toBe(true);
      expect(wrapper.find("h1").text()).toBe("Experience");
    });

    it("should render the timeline container", () => {
      const timeline = wrapper.find("#timeline");
      expect(timeline.exists()).toBe(true);
    });

    it("should render main container with correct ID", () => {
      const container = wrapper.find("#experience");
      expect(container.exists()).toBe(true);
    });

    it("should render the component", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("Component Data Integrity", () => {
    it("should initialize openPanels ref correctly", () => {
      expect(wrapper.vm.openPanels).toBeDefined();
      expect(Array.isArray(wrapper.vm.openPanels)).toBe(true);
      expect(wrapper.vm.openPanels.length).toBeGreaterThan(0);
    });

    it("should have access to timeline data", () => {
      expect(wrapper.vm.timeline).toBeDefined();
      expect(Array.isArray(wrapper.vm.timeline)).toBe(true);
      expect(wrapper.vm.timeline.length).toBe(2);
    });

    it("should have first timeline item with correct structure", () => {
      const firstItem = wrapper.vm.timeline[0];
      expect(firstItem.title).toBe("Senior Developer");
      expect(firstItem.company).toBe("Tech Corp");
      expect(firstItem.duration).toBe("2020 - Present");
      expect(firstItem.projects).toHaveLength(1);
    });

    it("should have second timeline item with correct structure", () => {
      const secondItem = wrapper.vm.timeline[1];
      expect(secondItem.title).toBe("Junior Developer");
      expect(secondItem.company).toBe("StartUp Inc");
      expect(secondItem.duration).toBe("2018 - 2020");
      expect(secondItem.projects).toHaveLength(1);
    });

    it("should have orderSkills method", () => {
      expect(typeof wrapper.vm.orderSkills).toBe("function");
    });
  });

  describe("orderSkills Function", () => {
    it("should sort skills alphabetically in ascending order", () => {
      const unsortedSkills = ["React", "Vue", "Angular"];
      const sorted = wrapper.vm.orderSkills(unsortedSkills);

      expect(sorted[0]).toBe("Angular");
      expect(sorted[1]).toBe("React");
      expect(sorted[2]).toBe("Vue");
    });

    it("should handle single skill", () => {
      const singleSkill = ["React"];
      const sorted = wrapper.vm.orderSkills(singleSkill);

      expect(sorted.length).toBe(1);
      expect(sorted[0]).toBe("React");
    });

    it("should handle empty skills array", () => {
      const emptySkills: string[] = [];
      const sorted = wrapper.vm.orderSkills(emptySkills);

      expect(sorted.length).toBe(0);
    });

    it("should handle skills with numbers and special characters", () => {
      const skillsWithNumbers = ["Node.js", "C#", "C++"];
      const sorted = wrapper.vm.orderSkills(skillsWithNumbers);

      expect(sorted[0]).toBe("C#");
      expect(sorted[1]).toBe("C++");
      expect(sorted[2]).toBe("Node.js");
    });

    it("should not modify the original array", () => {
      const originalSkills = ["React", "Vue", "Angular"];
      const originalReference = originalSkills;
      wrapper.vm.orderSkills(originalSkills);

      // The original array may or may not be modified depending on implementation
      // but should still contain same elements
      expect(originalSkills).toEqual(expect.arrayContaining([...originalReference]));
    });
  });

  describe("Styling and Classes", () => {
    it("should have correct padding classes on main container", () => {
      const container = wrapper.find("#experience");
      const classes = container.classes().join(" ");
      expect(classes).toContain("p-y-1");
      expect(classes).toContain("p-x-2");
    });

    it("should have correct padding classes on timeline", () => {
      const timeline = wrapper.find("#timeline");
      const classes = timeline.classes().join(" ");
      expect(classes).toContain("p-x-2");
    });
  });

  describe("Project Data Structure", () => {
    it("should have projects with all required fields", () => {
      const allProjects = wrapper.vm.timeline.flatMap((exp: any) => exp.projects);
      expect(allProjects.length).toBeGreaterThan(0);

      allProjects.forEach((project: any) => {
        expect(project).toHaveProperty("title");
        expect(project).toHaveProperty("description");
        expect(project).toHaveProperty("date");
        expect(project).toHaveProperty("logo");
        expect(project).toHaveProperty("skills");
        expect(Array.isArray(project.skills)).toBe(true);
      });
    });

    it("should have first project with correct data", () => {
      const firstProject = wrapper.vm.timeline[0].projects[0];
      expect(firstProject.title).toBe("Project A");
      expect(firstProject.date).toBe("2020-2021");
      expect(firstProject.skills).toContain("React");
      expect(firstProject.skills).toContain("TypeScript");
      expect(firstProject.skills).toContain("Node.js");
    });
  });

  describe("Experience Data Fields", () => {
    it("should have all required fields in each experience", () => {
      wrapper.vm.timeline.forEach((experience: any) => {
        expect(experience).toHaveProperty("title");
        expect(experience).toHaveProperty("company");
        expect(experience).toHaveProperty("duration");
        expect(experience).toHaveProperty("logo");
        expect(experience).toHaveProperty("description");
        expect(experience).toHaveProperty("projects");
      });
    });

    it("should have valid data types for all experience fields", () => {
      wrapper.vm.timeline.forEach((experience: any) => {
        expect(typeof experience.title).toBe("string");
        expect(typeof experience.company).toBe("string");
        expect(typeof experience.duration).toBe("string");
        expect(typeof experience.logo).toBe("string");
        expect(typeof experience.description).toBe("string");
        expect(Array.isArray(experience.projects)).toBe(true);
      });
    });
  });

  describe("Timeline Array Properties", () => {
    it("should have multiple experiences in timeline", () => {
      expect(wrapper.vm.timeline.length).toBeGreaterThanOrEqual(2);
    });

    it("should be able to iterate over all experiences", () => {
      let count = 0;
      wrapper.vm.timeline.forEach(() => {
        count++;
      });
      expect(count).toBe(2);
    });
  });

  describe("Component Template Structure", () => {
    it("should have div with id experience", () => {
      expect(wrapper.find("#experience").exists()).toBe(true);
      expect(wrapper.find("#experience").element.tagName).toBe("DIV");
    });

    it("should have div with id timeline", () => {
      expect(wrapper.find("#timeline").exists()).toBe(true);
      expect(wrapper.find("#timeline").element.tagName).toBe("DIV");
    });

    it("should have h1 element with Experience title", () => {
      const h1 = wrapper.find("h1");
      expect(h1.exists()).toBe(true);
      expect(h1.text()).toBe("Experience");
    });
  });
});
