
/**
 * Header Component
 * 
 * This component renders the main header of the application, including:
 * - An emoticon to add a playful element.
 * - The title of the project: "Project Happy Thoughts!".
 * 
 * Accessibility:
 * - An `aria-label` is added to the header container for screen readers, providing context about the project.
 */

export const Header = () => {
    return (
      <div className="header" aria-label="Project Happy Thoughts">
        <h1>(˶ᵔ ᵕ ᵔ˶)</h1>
        <h1>Project Happy Thoughts!</h1>
      </div>
    )
  }